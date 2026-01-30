FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Install Playwright browsers
RUN playwright install
RUN playwright install-deps

COPY . .

# Keeping the container alive for now since there is no logic yet
CMD ["tail", "-f", "/dev/null"]
