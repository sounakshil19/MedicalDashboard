// import supabase from "./supabaseClient";

// // ✅ SIGN UP FUNCTION (WITH IMAGE UPLOAD)
// export const signUp = async (
//   email: string,
//   password: string,
//   fullName: string,
//   image: File | null,
//   role: "admin" | "patient"
// ) => {
//   let imageUrl: string | null = null;

//   if (image) {
//     const fileExt = image.name.split(".").pop();
//     const fileName = `${Date.now()}.${fileExt}`;
//     const filePath = `profile_pictures/${fileName}`;

//     const { error: uploadError } = await supabase.storage
//       .from("profile_pictures")
//       .upload(filePath, image);

//     if (uploadError) {
//       throw new Error("Failed to upload image");
//     }

//     const { data } = supabase.storage.from("profile_pictures").getPublicUrl(filePath);
//     if (!data || !data.publicUrl) {
//       throw new Error("Failed to retrieve image URL");
//     }
//     imageUrl = data.publicUrl;
//   }

//   // ✅ Create User in Supabase Auth
//   const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
//     email,
//     password,
//     options: { data: { full_name: fullName, image_url: imageUrl, role } },
//   });

//   if (signUpError) throw new Error(signUpError.message);
//   if (!signUpData.user) throw new Error("User creation failed");

//   // ✅ Insert User Profile into 'profiles' Table
//   const { error: profileError } = await supabase.from("profiles").insert([
//     {
//       id: signUpData.user.id,
//       full_name: fullName,
//       image_url: imageUrl,
//       role,
//     },
//   ]);

//   if (profileError) {
//     throw new Error("Failed to save profile");
//   }

//   return signUpData;
// };

// // ✅ LOGIN FUNCTION
// export const login = async (email: string, password: string) => {
//   const { data, error } = await supabase.auth.signInWithPassword({ email, password });

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// };

// // ✅ GET USER PROFILE FUNCTION
// export const getUserProfile = async () => {
//   try {
//     const {
//       data: { user },
//       error: userError,
//     } = await supabase.auth.getUser();

//     if (userError || !user) {
//       throw new Error("User not found");
//     }

//     // ✅ Fetch user profile from 'profiles' table
//     const { data: profile, error: profileError } = await supabase
//       .from("profiles")
//       .select("full_name, image_url, role")
//       .eq("id", user.id)
//       .single();

//     if (profileError || !profile) {
//       throw new Error("Failed to fetch profile. Ensure profile exists in Supabase.");
//     }

//     // ✅ Ensure image URL is properly fetched
//     let imageUrl = profile.image_url;
//     if (imageUrl && !imageUrl.startsWith("http")) {
//       imageUrl = supabase.storage.from("profile_pictures").getPublicUrl(imageUrl).data.publicUrl;
//     }

//     return { full_name: profile.full_name, image_url: imageUrl, role: profile.role };
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// // ✅ LOGOUT FUNCTION
// export const logout = async () => {
//   const { error } = await supabase.auth.signOut();
//   if (error) {
//     throw new Error(error.message);
//   }
// };

// // ✅ RESET PASSWORD FUNCTION
// export const resetPassword = async (email: string) => {
//   const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
//     redirectTo: "https://your-app.com/reset-password", // Change this to your reset password page
//   });

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// };






import supabase from "./supabaseClient";

// ✅ SIGN UP FUNCTION (ONLY AUTH, NO PROFILE SAVING)
export const signUp = async (
  email: string,
  password: string,
  fullName: string,
  image: File | null,
  role: "admin" | "patient"
) => {
  let imageUrl: string | null = null;

  if (image) {
    const fileExt = image.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `profile_pictures/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("profile_pictures")
      .upload(filePath, image);

    if (uploadError) {
      throw new Error("Failed to upload image");
    }

    const { data } = supabase.storage.from("profile_pictures").getPublicUrl(filePath);
    if (!data || !data.publicUrl) {
      throw new Error("Failed to retrieve image URL");
    }
    imageUrl = data.publicUrl;
  }

  // ✅ Create User in Supabase Auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName, image_url: imageUrl, role } },
  });

  if (signUpError) throw new Error(signUpError.message);
  if (!signUpData.user) throw new Error("User creation failed");
  
  return signUpData;
};

// ✅ LOGIN FUNCTION
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// ✅ GET USER PROFILE FUNCTION (ONLY AUTH DATA)
export const getUserProfile = async () => {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      throw new Error("User not found");
    }

    // ✅ Return only user auth metadata
    return {
      full_name: user.user_metadata?.full_name || "Unknown",
      image_url: user.user_metadata?.image_url || null,
      role: user.user_metadata?.role || "patient",
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// ✅ LOGOUT FUNCTION
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};

// ✅ RESET PASSWORD FUNCTION
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://your-app.com/reset-password", // Change this to your reset password page
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// ✅ update PASSWORD FUNCTION
export async function updatePassword(email: string, newPassword: string) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password: newPassword,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
