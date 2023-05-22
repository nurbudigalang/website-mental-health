<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'nama',
        'email',
        'password',
    ];

    // ...

    // Jika Anda membutuhkan metode khusus atau relasi, tambahkan di sini
}