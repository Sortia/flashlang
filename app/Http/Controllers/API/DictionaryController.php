<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class DictionaryController extends Controller
{
    /** @var string  */
    private string $yandexTranslateUrl = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';

    /** @var string  */
    private string $apiKey;

    /**
     * DictionaryController constructor.
     */
    public function __construct()
    {
        parent::__construct(request());

        $this->apiKey = config('app.yandex_key');
    }

    /**
     * @return JsonResponse
     */
    public function translate(): JsonResponse
    {
        $response = Http::get($this->yandexTranslateUrl, [
            'key' => $this->apiKey,
            'text' => $this->request->word,
            'lang' => $this->request->from . '-' . $this->request->to,
        ]);

        if ($this->emptyResponse($response)) {
            abort(406);
        }

        return response()->json($this->format($response->json()));
    }

    /**
     * @param $info
     * @return array
     */
    private function format($info): array
    {
        $result = [
            'translate' => $info['def'][0]['tr'][0]['text'],
            'transcription' => $info['def'][0]['ts'],
        ];

        if (isset($info['def'][0]['tr'][0]['syn'])) {
            foreach ($info['def'][0]['tr'][0]['syn'] as $syn) {
                $result['synonyms'][] = $syn['text'];
            }
        } else {
            $result['synonyms'] = [];
        }

        return $result;
    }

    private function emptyResponse($response)
    {
        return empty($response['def']);
    }
}
