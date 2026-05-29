const handleSignup = async () => {
  if (!email || !password || !confirmPassword || !username) {
    setMessage({ type: "error", text: "⚠️ Fill all fields" });
    return;
  }

  if (username.length < 4) {
    setMessage({ type: "error", text: "❌ Username must be at least 4 characters" });
    return;
  }

  if (!validateUsername(username)) {
    setMessage({ type: "error", text: "❌ Username can only contain letters, numbers, _ and ." });
    return;
  }

  if (password !== confirmPassword) {
    setMessage({ type: "error", text: "❌ Passwords don't match" });
    return;
  }

  if (password.length < 6) {
    setMessage({ type: "error", text: "❌ Password too short" });
    return;
  }

  setLoading(true);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://johk.vercel.app",
      data: {
        username
      }
    }
  });

  setLoading(false);

  if (error) {
    setMessage({ type: "error", text: "❌ " + error.message });
  } else {
    setMessage({ type: "success", text: "✅ Account created! Check your email" });
  }
};
