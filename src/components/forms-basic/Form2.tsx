import { useState } from "react"
// Create a form with an email and password field.
// Validate the email format and check if the password meets specific criteria (e.g., minimum length, contains a number).
export default function Form2() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validatePassword = (password: string) => {
        const minLength=8;
        const hasNumber = /\d/;
        return password.length >= minLength && hasNumber.test(password);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;
        let emailError='';
        let passwordError='';
        if (!validateEmail(email)) {
            emailError = 'Invalid email format';
            valid = false;
        }
        if (!validatePassword(password)) {
            passwordError = 'Password must be at least 8 characters long and contain a number';
            valid = false;

        }
        setErrors({email:emailError, password:passwordError});
        if (valid) {
            console.log("Form submitted successfully");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    <br />
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
