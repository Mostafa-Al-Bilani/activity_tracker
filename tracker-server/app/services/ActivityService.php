<?php
namespace App\Services;

use App\Models\Activity;

class ActivityService
{
    public function createActivity($userId, $activityData)
    {
        return Activity::create([
            'user_id' => $userId,
            'date' => now()->format('Y-m-d'),
            'total_steps' => $activityData['steps'],
            'calories_burned' => $activityData['calories'],
            'distance' => $activityData['distance'],
            'active_minutes' => $activityData['active_minutes'],
        ]);
    }
}
