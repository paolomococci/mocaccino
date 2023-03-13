<?php

namespace App\Policies;

use App\Models\Prospect;
use App\Models\User;

class ProspectPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Prospect $prospect): bool
    {
        return $prospect->user()->is($user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Prospect $prospect): bool
    {
        return $prospect->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Prospect $prospect): bool
    {
        return $this->update($user, $prospect);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Prospect $prospect): bool
    {
        return $prospect->user()->is($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Prospect $prospect): bool
    {
        return $prospect->user()->is($user);
    }
}
