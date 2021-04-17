<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            return response()->json('', 204);
        } else {
            return response()->json([
                'error' => 'invalid_credentials'
            ], 403);
        }
    }

    public function logout(Request $request)
    {
        $request->session()->flush();
    }
}
