const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // 🔥 Your Firebase service account JSON file
const products = require('./data.json'); // 📄 Your JSON data

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to upload data
async function importData() {
  try {
    const productsCollection = db.collection('products');
    
    // Process each product in the array
    for (const product of products) {
      // Use the product's id as the document ID
      const docRef = productsCollection.doc(product.id.toString());
      
      // Remove any undefined or invalid values
      const cleanProduct = Object.entries(product).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = value;
        }
        return acc;
      }, {});

      await docRef.set(cleanProduct);
      console.log(`Uploaded product with ID: ${product.id}`);
    }
  } catch (error) {
    throw new Error(`Failed to import data: ${error.message}`);
  }
}

importData()
  .then(() => {
    console.log('✅ All data imported successfully!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  });
