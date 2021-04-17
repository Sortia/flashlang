<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $entity = Str::between($request->getRequestUri(), '/api/', '/');

        switch ($request->method()) {
            case 'GET':
                $action = 'read';
                break;
            case 'POST':
                $action = 'create';
                break;
            case 'PUT':
                $action = 'edit';
                break;
            case 'DELETE':
                $action = 'delete';
                break;
            default: abort(405);
        }

        if (Auth::user()->role->permissions->contains('name', $entity . '_' . $action)) {
            return $next($request);
        }

        abort(403);
    }
}
