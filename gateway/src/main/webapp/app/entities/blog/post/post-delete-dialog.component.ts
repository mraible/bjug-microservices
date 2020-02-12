import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPost } from 'app/shared/model/blog/post.model';
import { PostService } from './post.service';

@Component({
  templateUrl: './post-delete-dialog.component.html'
})
export class PostDeleteDialogComponent {
  post?: IPost;

  constructor(protected postService: PostService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.postService.delete(id).subscribe(() => {
      this.eventManager.broadcast('postListModification');
      this.activeModal.close();
    });
  }
}
