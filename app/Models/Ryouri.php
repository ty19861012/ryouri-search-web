<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Okiniiri;

class Ryouri extends Model {

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function okiniiri() {
        return $this->hasMany(Okiniiri::class);
    }

}