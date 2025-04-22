import * as SecureStore from 'expo-secure-store';

// ✅ Save securely
export async function saveSecure(key, value) {
  await SecureStore.setItemAsync(key, value);
}

// ✅ Retrieve securely
export async function getSecure(key) {
  return await SecureStore.getItemAsync(key);
}

// ✅ Delete securely
export async function deleteSecure(key) {
  await SecureStore.deleteItemAsync(key);
}