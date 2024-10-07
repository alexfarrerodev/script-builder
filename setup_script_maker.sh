#!/bin/bash

if [ ! -f backend/requirements.txt ]; then
    echo "Launch this file from the script_maker folder"
    echo "Exiting code error 1"
else
    echo "Reloading venv..."
    rm -rf backend/venv-env

    python3 -m venv backend/venv-env
    source backend/venv-env/bin/activate

    echo "Installing requirements..."
    pip install -r backend/requirements.txt

    echo "venv installed successfully"
fi

