#!/bin/bash

set -euo pipefail

# Check if project name was provided
if [[ $# -eq 0 ]]; then
read -p "Enter project name: " PROJECT_NAME
else
PROJECT_NAME=$1
fi

# Validate project name
if [[ -z "$PROJECT_NAME" ]]; then
echo "Error: Project name cannot be empty"
exit 1
fi

echo "Renaming project to '$PROJECT_NAME'..."

# Force project name to lowercase for package.json
PROJECT_NAME_LOWER=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')

# Update package.json
if [[ -f package.json ]]; then
if [[ "$OSTYPE" == "darwin"* ]]; then
sed -i '' "s/\"name\"[[:space:]]*:[[:space:]]*\"[^\"]*\"/\"name\": \"$PROJECT_NAME_LOWER\"/" package.json
else
sed -i "s/\"name\"[[:space:]]*:[[:space:]]*\"[^\"]*\"/\"name\": \"$PROJECT_NAME_LOWER\"/" package.json
fi
echo "✓ Updated package.json with lowercase name: $PROJECT_NAME_LOWER"
fi

# Update index.html
if [[ -f index.html ]]; then
# Get current title
OLD_TITLE=$(grep -oP '(?<=<title>).*?(?=</title>)' index.html)

  # Replace with new project name
  if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s|<title>.*</title>|<title>$PROJECT_NAME</title>|" index.html
  else
  sed -i "s|<title>.*</title>|<title>$PROJECT_NAME</title>|" index.html
  fi

  # Show updated title
  echo "✓ Updated title: $OLD_TITLE => $PROJECT_NAME"
  fi

  echo "✓ Project renamed successfully to '$PROJECT_NAME'!"