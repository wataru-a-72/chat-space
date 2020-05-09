class GroupUser < ApplicationRecord
  belongs_to :group
  belongs_to :user

  def show_group_member
    - current_user.groups.each do |group|
    end
  end
end
