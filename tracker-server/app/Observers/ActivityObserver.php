<?php

namespace App\Observers;

use App\Models\Activity;
use Illuminate\Support\Facades\Log;


class ActivityObserver
{

    public function created(Activity $activity)
    {
       
        Log::info('New activity recorded for user: ' . $activity->user_id);
    }

    /**
     * Handle the Activity "updated" event.
     */
    public function updated(Activity $activity): void
    {
        //
    }

    /**
     * Handle the Activity "deleted" event.
     */
    public function deleted(Activity $activity): void
    {
        //
    }

    /**
     * Handle the Activity "restored" event.
     */
    public function restored(Activity $activity): void
    {
        //
    }

    /**
     * Handle the Activity "force deleted" event.
     */
    public function forceDeleted(Activity $activity): void
    {
        //
    }
}
