CREATE TABLE public.sleep (
    name VARCHAR,
    gender VARCHAR,
    duration INTEGER,
    date DATE,
    created_at DATE,
    updated_at DATE
);

INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '10 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '9 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '8 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 10)::int, CURRENT_DATE - INTERVAL '7 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 10)::int, CURRENT_DATE - INTERVAL '7 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '5 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '4 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '3 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '2 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '1 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('walter white', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '0 days', NOW(), NOW());

VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '7 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '6 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '5 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '4 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '3 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '2 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '1 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('gus fring', 'male', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '0 days', NOW(), NOW());

VALUES ('daenerys targaryen', 'female', floor(random() * 4)::int, CURRENT_DATE - INTERVAL '6 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('daenerys targaryen', 'female', floor(random() * 10)::int, CURRENT_DATE - INTERVAL '6 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('daenerys targaryen', 'female', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '4 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('daenerys targaryen', 'female', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '3 days', NOW(), NOW());
INSERT INTO public.sleep (name, gender, duration, date, created_at, updated_at)
VALUES ('daenerys targaryen', 'female', floor(random() * 25)::int, CURRENT_DATE - INTERVAL '1 days', NOW(), NOW());
