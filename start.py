import os
import json

def get_config():
    # Read configuration
    with open('config.json', 'r') as f:
        return json.load(f)

def main():
    # Activate virtual environment
    os.system('source venv/bin/activate')
    
    # Launch TANGO
    os.system('python run_tango.py')

if __name__ == "__main__":
    main() 