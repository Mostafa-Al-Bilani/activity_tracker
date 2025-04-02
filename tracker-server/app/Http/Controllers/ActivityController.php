<?php
namespace App\Http\Controllers;

use App\Services\ActivityService;
use App\Services\PredictionService;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    protected $activityService;
    protected $predictionService;

    public function __construct(ActivityService $activityService, PredictionService $predictionService)
    {
        $this->activityService = $activityService;
        $this->predictionService = $predictionService;
    }

    public function storeActivity(Request $request)
    {
        $userId = auth()->user()->id;
        $activityData = $request->only(['steps', 'calories', 'distance', 'active_minutes']);

        $activity = $this->activityService->createActivity($userId, $activityData);

        return response()->json($activity, 201);
    }

    public function storePrediction(Request $request)
    {
        $userId = auth()->user()->id;
        $predictedData = $request->only(['steps', 'calories', 'distance']);

        $prediction = $this->predictionService->createPrediction($userId, $predictedData);

        return response()->json($prediction, 201);
    }
}
