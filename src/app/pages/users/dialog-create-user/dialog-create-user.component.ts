import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from '../../../service/api.service';
import { UserService } from '../user.service';
export interface CloudBinaryResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
}

@Component({
  selector: 'ngx-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss'],
})
export class DialogCreateUserComponent implements OnInit {
  userRegister: FormGroup;
  selectedOption: boolean = true;
  fileAvatar: File;
  private formData: FormData;
  constructor(
    protected ref: NbDialogRef<DialogCreateUserComponent>,
    private fb: FormBuilder,
    private userSerivce: UserService,
    private apiService: ApiService,
  ) { }

  cancel() {
    this.ref.close();
  }

  submit() {

    if (this.userRegister.valid) {
      this.formData = new FormData();
      this.formData.append('file', this.fileAvatar);
      this.formData.append('folder', 'MovieProject/User');
      this.formData.append('upload_preset', 'yeaeraza');
      this.apiService.postData<CloudBinaryResponse>
        ('https://api.cloudinary.com/v1_1/cuongpham/image/upload', this.formData)
        .subscribe(res => {
          if (res && res.body) {
            this.userRegister.get('image').setValue(res.body.secure_url);
            this.userSerivce.addUser(this.userRegister.value).subscribe();
            this.ref.close();
          }
        },
        );
    }
  }


  fileChangeEvent(e: File[]) {
    this.fileAvatar = e[0];
  }

  ngOnInit(): void {
    this.userRegister = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
      fullName: this.fb.control(''),
      mobile: this.fb.control(''),
      position: this.fb.control(''),
      sex: this.fb.control(''),
      dateOfBirth: this.fb.control(''),
      image: this.fb.control(''),
    });
  }
}
