-- Create user_log table for persisting user choices
CREATE TABLE public.user_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('asistido', 'ruleta')),
  question_id TEXT,
  option_id TEXT,
  category_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for better performance
CREATE INDEX idx_user_log_session_id ON public.user_log(session_id);
CREATE INDEX idx_user_log_created_at ON public.user_log(created_at);

-- Enable Row Level Security (allow all access for now since no authentication)
ALTER TABLE public.user_log ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (public access)
CREATE POLICY "Allow all access to user_log" 
ON public.user_log 
FOR ALL 
USING (true);