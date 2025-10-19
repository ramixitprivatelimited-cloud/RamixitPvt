# RAMIXIT PRIVATE LIMITED Website - Deployment Guide

## Prerequisites

1. **MongoDB Atlas Account**: Create a free MongoDB Atlas cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **GitHub Account**: For code repository

## Step 1: Set up MongoDB Atlas

1. Create a new cluster in MongoDB Atlas
2. Create a database user with read/write permissions
3. Get your connection string (replace `<password>` with your database user password)
4. Whitelist Vercel's IP addresses or use `0.0.0.0/0` for all IPs

## Step 2: Environment Variables

Set these environment variables in Vercel:

### Required Variables:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ramixit-db?retryWrites=true&w=majority
ADMIN_SECRET_KEY=your-very-secure-admin-secret-key-here
NEXT_PUBLIC_ADMIN_PASSWORD=your-admin-password
NEXT_PUBLIC_ADMIN_SECRET=your-very-secure-admin-secret-key-here
```

### How to set in Vercel:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable above

## Step 3: Deploy to Vercel

### Option 1: Deploy from GitHub
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy

### Option 2: Deploy using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Step 4: Admin Access

After deployment:
1. Visit `https://your-domain.vercel.app/admin`
2. Use the password you set in `NEXT_PUBLIC_ADMIN_PASSWORD`
3. Access the admin dashboard to view contact form submissions

## Features Included

### Contact Form
- Saves submissions to MongoDB
- Tracks IP address and user agent
- Form validation
- Success/error feedback

### Admin Panel
- Secure login with password protection
- View all contact form submissions
- Filter by status (new, read, responded, archived)
- Update submission status
- Pagination support
- Delete submissions
- Detailed view with all submission data

### Admin URLs
- Login: `/admin`
- Dashboard: `/admin/dashboard`

## Security Features

- Environment variable-based authentication
- IP address tracking
- User agent logging
- Form validation
- Protected admin routes
- Secure MongoDB connection

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact?adminKey=...` - Get contacts (admin only)
- `PATCH /api/contact/[id]?adminKey=...` - Update contact status (admin only)
- `DELETE /api/contact/[id]?adminKey=...` - Delete contact (admin only)

## Database Schema

### Contact Collection
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  subject: String (required),
  message: String (required),
  status: String (enum: 'new', 'read', 'responded', 'archived'),
  submittedAt: Date,
  ipAddress: String,
  userAgent: String,
  createdAt: Date
}
```

## Troubleshooting

### MongoDB Connection Issues
- Verify connection string is correct
- Check database user permissions
- Ensure IP whitelist includes Vercel IPs

### Admin Login Issues
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` is set correctly
- Clear browser cache and try again
- Check environment variables in Vercel dashboard

### Contact Form Not Working
- Check MongoDB connection
- Verify API routes are deployed correctly
- Check browser console for errors

## Production Recommendations

1. **Use Strong Passwords**: Use secure, randomly generated passwords
2. **Regular Backups**: Set up MongoDB Atlas automated backups
3. **Monitor Usage**: Monitor database usage and API calls
4. **Update Dependencies**: Regularly update npm packages
5. **SSL Certificate**: Vercel provides automatic HTTPS

## Support

For issues with the website deployment, check:
1. Vercel deployment logs
2. Browser console errors
3. MongoDB Atlas connection logs
4. Environment variable configuration