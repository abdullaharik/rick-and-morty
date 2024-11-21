'use client';

import { useRouter } from 'next/navigation';

const useUpdateUrl = () => {
  const router = useRouter();

  const updateUrl = (params: { status?: string; gender?: string }) => {
    const { status = 'all', gender = 'all' } = params;

    // Construct the new path based on the provided parameters
    const newPath = `${gender}/${status}`;

    // Update the URL with the new path
    router.push(`/${newPath}`);
  };

  return { updateUrl };
};

export default useUpdateUrl;
