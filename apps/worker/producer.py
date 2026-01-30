import redis

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

def add_job():
    term = input("Enter a search term (e.g., 'Pizza in New York'): ")
    print(f"📤 Pushing '{term}' to queue...")
    r.rpush('scrape_queue', term)
    print("✅ Job sent! Check your worker terminal.")

if __name__ == "__main__":
    add_job()