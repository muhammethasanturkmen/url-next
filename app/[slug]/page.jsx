"use client";
import { useRouter } from 'next/navigation';
import { supabase } from '../supabaseClient';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Redirect() {
  const router = useRouter();
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) {
      console.log('Slug is not available');
      return;
    }

    const fetchUrl = async () => {
      console.log('Fetching data for slug:', slug);

      const { data, error } = await supabase
        .from('urls')
        .select('long_url')
        .eq('short_url', slug)
        .single();

      console.log('Data:', data);
      console.log('Error:', error);

      if (data) {
        window.location.href = data.long_url;
      } else {
        console.error('No data found, redirecting to 404');
        router.push('/404');
      }
    };

    fetchUrl();
  }, [slug, router]);

  return <p>Redirecting...</p>;
}
