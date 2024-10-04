
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://peaodvpyaqopeonwzdzh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYW9kdnB5YXFvcGVvbnd6ZHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjMsImV4cCI6MjA0MzM3ODY2M30.SHkMY7s6J3DomSprxgvKzuPoMpPgH3CX0hI-ujqHLcY';
export const supabase = createClient(supabaseUrl, supabaseKey);
