import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className={`absolute inset-0 bg-emerald-900 object-cover`} />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <img className='h-20 object-cover' src="https://pkb.id/images/logo.png" alt="" />
          </div>

          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;Ini adalah contoh kata kata yang bisa di sematkan sebagai motivasi&rdquo;
              </p>
              <footer className='text-sm'>Cak Imin Now</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
              <p className='text-sm text-muted-foreground'>
                Silahkan login menggunakan email dan password yang sudah di berikan
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}
