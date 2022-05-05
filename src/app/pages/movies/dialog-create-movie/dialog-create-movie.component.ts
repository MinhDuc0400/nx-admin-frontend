import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../../service/api.service';
import { CloudBinaryResponse } from '../../users/dialog-create-user/dialog-create-user.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'ngx-dialog-create-movie',
  templateUrl: './dialog-create-movie.component.html',
  styleUrls: ['./dialog-create-movie.component.scss'],
})
export class DialogCreateMovieComponent implements OnInit {
  movieForm: FormGroup;
  private fileMovie: File[] = [];
  private formData: FormData;

  private fileThumbnailMovie: File;
  constructor(
    protected ref: NbDialogRef<DialogCreateMovieComponent>,
    private apiService: ApiService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private movieService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      name: this.fb.control(''),
      year: this.fb.control(''),
      imdb: this.fb.control(''),
      country: this.fb.control(''),
      director: this.fb.control(''),
      time: this.fb.control(''),
      quality: this.fb.control(''),
      category: this.fb.control(''),
      trailer: this.fb.control(''),
      content: this.fb.control(''),
      type: this.fb.control('Phim Lẻ'),
      episodeNumber: this.fb.control(1),
      image: this.fb.control(''),
      movieLinks: this.fb.control(''),
    });
    this.movieForm.get('type').valueChanges.subscribe(change => {
      if (change === 'PHIM LẺ') {
        this.movieForm.get('episodeNumber').setValue(1);
      }

    });
  }

  get movieLinks() {
    return this.movieForm.get('movieLinks').value;
  }


  fileMovieChangeEvent(e: File) {
    if (e && !this.fileMovie.some(el => el.name === e[0].name)) {
      this.fileMovie.push(e[0]);
    }
  }

  fileThumbnailMovieChangeEvent(e: File[]) {
    if (e) {
      this.fileThumbnailMovie = e[0];
    }
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    const movieLinks = [];
    this.formData = new FormData();
    this.formData.append('file', this.fileThumbnailMovie);
    this.formData.append('folder', 'MovieProject/User');
    this.formData.append('upload_preset', 'yeaeraza');
    this.apiService.postData<CloudBinaryResponse>
      ('https://api.cloudinary.com/v1_1/cuongpham/image/upload', this.formData)
      .subscribe(res => {
        if (res && res.body) {
          this.movieForm.get('image').setValue(res.body.secure_url);
        }
      },
    );
    this.fileMovie.forEach((movie, index) => {
      const filePath = `movie/${movie.name.split('.').slice(0, -1).join('.')}_ep${index + 1}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, movie).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            movieLinks.push({
              url,
              episodeName: (index + 1).toString(),
            });
            this.movieForm.get('movieLinks').setValue(movieLinks);
            this.movieService.addMovie(this.movieForm.value).subscribe(res => {
              console.log(res);

            });
          });
        }),
      ).subscribe();
    });

  }

}
