<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProspectFeatureTest extends TestCase
{
    /**
     * @test
     */
    public function session_application_test(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->dumpHeaders();
        $response->dumpSession();
        $response->dd();
    }
}
