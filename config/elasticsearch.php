<?php

return [
    'host' => env('ELASTICSEARCH_IP', '127.0.0.1'),
    'port' => env('ELASTICSEARCH_PORT', '9200'),
    'user' => env('ELASTICSEARCH_USERNAME', 'elastic'),
    'pass' => env('ELASTICSEARCH_PASSWORD', '')
];
