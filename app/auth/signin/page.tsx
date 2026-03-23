import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-2">Welcome to AgencyFlow</h1>
        <p className="text-gray-500 text-center mb-6">
          Sign in to manage your agency’s clients and projects.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm">
          <Link href="/auth/reset" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
          <span>
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 hover:underline">
              Sign up now.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}