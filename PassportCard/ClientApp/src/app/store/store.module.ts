import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { PostReducers } from './post.reducer';
import { PostEffects } from './post.effects';

@NgModule({
    imports  : [
        StoreModule.forFeature('post', PostReducers),
        EffectsModule.forFeature([PostEffects]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot()
    ],
    providers: []
})
export class PostStoreModule
{
}
