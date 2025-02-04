import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";
import ForgotPasswordForm from "@/app/(auth)/forgot-password/_components/forgot-password-form";

export default async function Login() {
  return (
    <main className="min-h-screen">
      <AuthWrapper
        title="Забравена парола"
        description="Моля, въведете имейл адреса, с който сте се регистрирали. След успешно нулиране на паролата ще получите линк за създаване на нова."
      >
        <ForgotPasswordForm />
      </AuthWrapper>
    </main>
  );
}
