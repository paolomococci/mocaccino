import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Prospect from '@/Components/Prospect';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {
    useForm,
    Head
} from '@inertiajs/react';

export default function Index({ auth, prospects }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('prospects.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Prospects" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea value={data.message} placeholder="What do you want to complain about today?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}>
                    </textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" processing={processing}>
                        Prospect
                    </PrimaryButton>
                </form>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {prospects.map(prospect =>
                        <Prospect key={prospect.id} prospect={prospect} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
