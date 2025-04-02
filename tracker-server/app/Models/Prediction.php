<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Prediction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'predicted_steps',
        'predicted_calories',
        'predicted_distance',
        'prediction_date'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
