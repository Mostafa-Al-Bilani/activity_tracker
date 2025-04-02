<?php
namespace App\Services;

use App\Models\Prediction;

class PredictionService
{
    public function createPrediction($userId, $predictedData)
    {
        return Prediction::create([
            'user_id' => $userId,
            'predicted_steps' => $predictedData['steps'],
            'predicted_calories' => $predictedData['calories'],
            'predicted_distance' => $predictedData['distance'],
            'prediction_date' => now(),
        ]);
    }

    public function updatePrediction($userId, $predictedData)
    {
        $prediction = Prediction::where('user_id', $userId)
            ->where('prediction_date', now()->format('Y-m-d'))
            ->first();

        if ($prediction) {
            $prediction->update($predictedData);
        }

        return $prediction;
    }
}
