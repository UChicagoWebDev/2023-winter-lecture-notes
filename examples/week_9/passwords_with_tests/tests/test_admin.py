import pytest
import passwords

@pytest.fixture
def client():
    server = passwords.create_app()
    with server.test_client() as client:
        yield client


def test_admin_forbidden(client):
    """Returns a 403 to calls without the correct secret password"""

def test_admin_with_code(client):
    """Returns a 200 to calls with the correct secret password"""
