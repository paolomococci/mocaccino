import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    useForm,
    usePage
} from '@inertiajs/react';

dayjs.extend(relativeTime);

export default function Prospect({ prospect }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, processing, reset, errors } = useForm({
        message: prospect.message,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('prospects.update', prospect.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div className="p-6 flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{prospect.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">{dayjs(prospect.created_at).fromNow()}</small>
                        {prospect.created_at !== prospect.updated_at && <small className="text-sm text-gray-600"> &#xb7; edited</small>}
                    </div>
                    {prospect.user.id === auth.user.id &&
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 bg-gray-700 hover:bg-green-500 focus:bg-green-500 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                                <Dropdown.Link as="button" href={route('prospects.destroy', prospect.id)} method="delete">
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    }
                </div>
                {
                    editing
                        ? <form onSubmit={submit}>
                            <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                            </textarea>
                            <InputError message={errors.message} class="mt-2" />
                            <div className="space-x-2">
                                <PrimaryButton className="mt-4">Save</PrimaryButton>
                                <button className="mt-4" onClick={() => setEditing(false) && reset()}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                        : <p className="mt-4 text-lg text-gray-900">
                            {prospect.message}
                        </p>
                }
            </div>
        </div>
    )
}
