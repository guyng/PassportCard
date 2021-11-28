import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../common/models/post.model';
import { loadPosts } from '../store/post.actions';
import { PostState } from '../store/post.reducer';
import { getLoadingPosts, getPosts } from '../store/post.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  scrollPage = 0;
  posts$: Observable<Post[]>;
  timeout
  loading$: Observable<boolean>;
  loading: boolean;
  searchInput: string = '';
  constructor(private _store: Store<PostState>) {
    this.posts$ = this._store.select(getPosts);
    this.loading$ = this._store.select(getLoadingPosts);
    this._store.dispatch(loadPosts({ page: 0, searchInput: this.searchInput }));
    this.loading$.subscribe(l => {
      this.loading = l;
    })
  }

  async onScroll() {
    if (this.loading) {
      return;
    }
    this.scrollPage++;
    console.log("this.scrollPage", this.scrollPage);

    this._store.dispatch(loadPosts({ page: this.scrollPage, searchInput: this.searchInput }));
  }

  onPostSearch(value) {
    console.log(value);
    this.scrollPage = 0;
    this.searchInput = value;
    this._store.dispatch(loadPosts({ page: this.scrollPage, searchInput: this.searchInput }));
  }
}
