<?php

namespace App\Http\Controllers;

use App\Models\Prospect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProspectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render(
            'Prospects/Index',
            [
                'prospects' => Prospect::with('user:id,name')->latest()->get(),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate(
            [
                'message' => 'required|string|max:255',
            ]
        );
        $request->user()->prospects()->create($validated);

        return redirect(route('prospects.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Prospect $prospect)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prospect $prospect)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(
        Request $request,
        Prospect $prospect
    ): RedirectResponse {
        $this->authorize('update', $prospect);
        $validated = $request->validate(
            [
                'message' => 'required|string|max:255',
            ]
        );
        $prospect->update($validated);

        return redirect(
            route('prospects.index')
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prospect $prospect): RedirectResponse
    {
        $this->authorize('delete', $prospect);
        $prospect->delete();

        return redirect(route('prospects.index'));
    }
}
