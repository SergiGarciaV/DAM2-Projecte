"""Initial migration

Revision ID: 153d8dcf300b
Revises: 
Create Date: 2024-01-13 17:18:43.435326

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '153d8dcf300b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mensaje',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=50), nullable=False),
    sa.Column('correo', sa.String(length=50), nullable=False),
    sa.Column('mensaje', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mensaje')
    # ### end Alembic commands ###
