// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Guild Membership type
export interface GuildMembership extends CosmicObject {
  type: 'guild-memberships'
  metadata: {
    membership_name?: string
    description?: string
    price?: string
    benefits?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
  }
}

// Blog Post type
export interface BlogPost extends CosmicObject {
  type: 'blog-posts'
  metadata: {
    title?: string
    content?: string
    excerpt?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    publish_date?: string
  }
}

// Guild Value type
export interface GuildValue extends CosmicObject {
  type: 'guild-values'
  metadata: {
    value_title?: string
    description?: string
    icon_image?: {
      url: string
      imgix_url: string
    }
  }
}

// Type guards
export function isGuildMembership(obj: CosmicObject): obj is GuildMembership {
  return obj.type === 'guild-memberships'
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts'
}

export function isGuildValue(obj: CosmicObject): obj is GuildValue {
  return obj.type === 'guild-values'
}