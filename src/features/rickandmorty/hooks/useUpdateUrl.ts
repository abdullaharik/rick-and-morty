'use client';

import { useRouter } from 'next/navigation';

const useUpdateUrl = () => {
  const router = useRouter();

  const updateUrl = (params: { status?: string; gender?: string }) => {
    const { status, gender } = params;

    const newPath = `${gender}/${status}`;

    router.push(`/${newPath}`);
  };

  return { updateUrl };
};

export default useUpdateUrl;
