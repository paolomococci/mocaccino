<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Prospect extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
    ];

    /**
     * Get the user that owns the Prospect.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
