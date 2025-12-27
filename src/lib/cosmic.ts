import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG as string,
  readKey: import.meta.env.COSMIC_READ_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch guild memberships
export async function getGuildMemberships() {
  try {
    const response = await cosmic.objects
      .find({ type: 'guild-memberships' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch guild memberships')
  }
}

// Fetch blog posts with sorting
export async function getBlogPosts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by publish date
    return response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.publish_date || '').getTime()
      const dateB = new Date(b.metadata?.publish_date || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog posts')
  }
}

// Fetch guild values
export async function getGuildValues() {
  try {
    const response = await cosmic.objects
      .find({ type: 'guild-values' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch guild values')
  }
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch blog post')
  }
}

// Fetch single guild membership by slug
export async function getGuildMembership(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'guild-memberships', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch guild membership')
  }
}