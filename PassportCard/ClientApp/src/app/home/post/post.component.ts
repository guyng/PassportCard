import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/common/models/post.model';
import { deletePost } from 'src/app/store/post.actions';
import { PostState } from 'src/app/store/post.reducer';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private _store: Store<PostState>) { 
    
  }

  ngOnInit() {
  }

  deletePost(postId){
    this._store.dispatch(deletePost({postId}));
  }

}
