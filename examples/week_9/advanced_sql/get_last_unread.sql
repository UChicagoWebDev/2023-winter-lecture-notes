with
  all_channels as
    (select id from channels),
  my_last_read as (
    select
      all_channels.id as channel_id,
      coalesce(last_read.last_read_message_id, 0) as last_read_id
    from all_channels
    left join last_read
    on all_channels.id = last_read.channel_id
    where last_read.user_id = 1)
select
  my_last_read.channel_id,
  count(*)
from
  my_last_read
left join
  messages
on my_last_read.channel_id = messages.channel_id
where messages.id > my_last_read.last_read_id
group by channel_id;
