import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';
import { PollResultsComponent } from './components/poll-results/poll-results.component';
import { LoginComponent } from './components/login/login.component';
import { PrivatePollsComponent } from './components/private-polls/private-polls.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'polls', component: PollListComponent },
    {
        path: 'create',
        component: CreatePollComponent,
        //canActivate: [authGuard]
    },
    {
        path: "private-polls",
        component: PrivatePollsComponent,
        //canActivate: [authGuard],
    },
    // { path: 'poll/:id', component: PollVoteComponent },
    // { path: 'poll/:id/results', component: PollResultsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
