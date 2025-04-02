<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'total_steps',
        'calories_burned',
        'distance',
        'active_minutes'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
