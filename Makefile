.PHONY: all backend frontend

run: backend frontend

backend:
	cd backend && python app.py &

frontend:
	cd frontend && npm run dev &

stop:
	@echo "Stopping servers on ports 3000-3005..."
	@for port in $(shell seq 3000 3005); do \
		if fuser $$port/tcp > /dev/null 2>&1; then \
			echo "Killing process on port $$port"; \
			fuser -k $$port/tcp; \
		else \
			echo "No server running on port $$port"; \
		fi \
	done
	@echo "Servers stopped."
