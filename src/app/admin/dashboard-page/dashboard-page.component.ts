import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  pSubs: Subscription;
  searchStr = '';
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.pSubs = this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
  ngOnDestroy(): void {
    if (this.pSubs) {
      this.pSubs.unsubscribe();
    }
  }

  removePost(id: string) {

  }
}
