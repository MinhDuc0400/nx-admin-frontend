import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from './user.service';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';

const moment = require('moment');
@Component({
  selector: 'ngx-movies',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  settings = {
    mode: 'inline',
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
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
      fullName: {
        title: 'Full Name',
        type: 'string',
        editable: true,
      },
      mobile: {
        title: 'Phone Number',
        type: 'string',
        editable: true,
      },
      position: {
        title: 'Position',
        type: 'string',
        editable: true,
      },
      dateOfBirth: {
        title: 'Date Of Birth',
        type: 'string',
        editable: true,
      },
      email: {
        title: 'Email',
        type: 'string',
        editable: true,
      },
    },
    action: {
      add: false,
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(
    private userSerivce: UserService,
    private dialogService: NbDialogService,
    ) {
    this.userSerivce.getAll().subscribe(data => {
      if (data && data.body) {
        data.body.forEach(el => {
          el.dateOfBirth = moment(el.dateOfBirth).format('LL');
        });
        this.source.load(data.body);
      }
    });
  }

  open3() {
    this.dialogService.open(DialogCreateUserComponent)
      .onClose.subscribe();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.userSerivce.deleteUserById(event.data.id).subscribe(res => {
        if (res) {
          event.confirm.resolve();
        }
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    event.newData.dateOfBirth = moment(event.newData.dateOfBirth).format('YYYY-MM-DD[T]HH:mm:ss');
    this.userSerivce.editUser(event.newData).subscribe(res => {
      if (res) {
        event.confirm.resolve();
      }
    });
  }

  onCreateConfirm(event): void {
    event.confirm.resolve();

  }

  ngOnInit(): void {
  }

}
