import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { DialogCreateMovieComponent } from './dialog-create-movie/dialog-create-movie.component';
import { MoviesService } from './movies.service';

@Component({
  selector: 'ngx-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  settings = {
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit" (click)=open3()></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
        editable: true,
      },
      year: {
        title: 'Year',
        type: 'string',
        editable: true,
      },
      country: {
        title: 'Country',
        type: 'string',
        editable: true,
      },
      category: {
        title: 'Category',
        type: 'string',
        editable: true,
      },
      type: {
        title: 'Type',
        type: 'string',
        editable: true,
      },
      time: {
        title: 'Length',
        type: 'number',
        editable: true,
      },
      episodeNumber: {
        title: 'Number of Episodes',
        type: 'string',
        editable: false,
      },
    },
    action: {
      add: false,
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(
    private dialogService: NbDialogService,
    private movieService: MoviesService
  ) {
    this.movieService.getAll().subscribe(data => {
      if (data && data.body) {
        this.source.load(data.body);
      }
    });
   }

  ngOnInit(): void {
  }

  open3() {
    this.dialogService.open(DialogCreateMovieComponent, {hasScroll: true})
      .onClose.subscribe();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.movieService.deleteMovieById(event.data.id).subscribe(res => {
        if (res) {
          event.confirm.resolve();
        }
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    // event.newData.dateOfBirth = moment(event.newData.dateOfBirth).format('YYYY-MM-DD[T]HH:mm:ss');
    this.movieService.editMovie(event.newData).subscribe(res => {
      if (res) {
        event.confirm.resolve();
      }
    });
  }

  onCreateConfirm(event): void {
    event.confirm.resolve();

  }

}
